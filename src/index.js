import component from './component';
import component2 from './component2';
import './main.scss';
import 'react';
import 'react-dom';
import { bake } from "./shake";

document.body.appendChild(component("pppp"));
document.body.appendChild(component2('hejahej'));
bake();