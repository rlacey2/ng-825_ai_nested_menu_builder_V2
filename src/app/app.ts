import { Component } from '@angular/core';
import { NavMenuDisplay } from './nav-menu-display/nav-menu-display';
import { NavNode } from './nav-menu-display/nav-node.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavMenuDisplay, JsonPipe],
  providers: [],
  templateUrl: './app.html',
    host: {
    class: 'd-flex flex-column overflow-hidden dvh-100'
  },
})
export class AppComponent {
  state = { selectedIds: new Set<string>() };

  navItems: NavNode[] = [
    {
      id: 'file',
      name: 'File',
      children: [
        { id: 'new', name: 'New' },
        { id: 'open', name: 'Open' }
      ]
    },
    {
      id: 'edit',
      name: 'Edit',
      children: [
        {
          id: 'prefs',
          name: 'Preferences',
          children: [
            { id: 'theme', name: 'Theme' },
            { id: 'layout', name: 'Layout' }
          ]
        }
      ]
    }
  ];
  navItems2: NavNode[] = [
    {
      id: 'file2',
      name: 'File2',
      children: [
        { id: 'new2', name: 'New2' },
        { id: 'open2', name: 'Open2' }
      ]
    },
    {
      id: 'edit2',
      name: 'Edit2',
      children: [
        {
          id: 'prefs2',
          name: 'Preferences2',
          children: [
            { id: 'theme2', name: 'Theme2' },
            { id: 'layout2', name: 'Layout2' }
          ]
        }
      ]
    }
  ];

onLeafSelected(node: NavNode) {
  console.log('Leaf clicked:', node);
  // examples:
  // this.router.navigate([node.route]);
  // this.selectedValue = node.id;
}

}