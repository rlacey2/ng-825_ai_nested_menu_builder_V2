import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavNode } from './nav-node.model';

@Component({
  selector: 'nav-menu-display',
  standalone: true,
  imports: [CommonModule, NavMenuDisplay],
  templateUrl: './nav-menu-display.html',
  styleUrls: ['./nav-menu-display.css']
})

export class NavMenuDisplay {
  @Input() nodes: NavNode[] = [];
  @Input() state!: { selectedIds: Set<string> };
  @Input() level = 0;

    @Output() leafClick = new EventEmitter<NavNode>();

    /*
  open(node: NavNode) {
    this.closeSiblings(node);
    node.expand = true;
  }
    */

  open(node: NavNode, el: HTMLElement) {
  this.closeSiblings(node);

  // Measure submenu position
  const rect = el.getBoundingClientRect();
  const submenuWidth = 260; // safe estimate, see note below
  const spaceRight = window.innerWidth - rect.right;

  node.openLeft = spaceRight < submenuWidth;
  node.expand = true;
}


  /*
  close(node: NavNode) {
    node.expand = false;
  }
*/

  toggle(node: NavNode) {
    node.expand = !node.expand;
  }

  closeSiblings(node: NavNode) {
    this.nodes.forEach(n => n !== node && (n.expand = false));
  }

  @HostListener('document:click')
  closeAll() {
    this.nodes.forEach(n => n.expand = false);
  }

onNodeClick(node: NavNode, event: MouseEvent) {
    event.stopPropagation();

    // passed all the way back to the parent 

    // ✅ Leaf node = no children
    if (!node.children || node.children.length === 0) {
      this.leafClick.emit(node);
    } else {
      node.expand = !node.expand;
    }
  }

}