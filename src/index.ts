import "./styles.css";
import {} from "rxjs";
import {} from "rxjs/operators";

type Coords = [number, number];

function eventToCoords(event: MouseEvent): Coords {
  return [event.clientX, event.clientY];
}

const DELAY = 80;

const circles: HTMLElement[] = Array.from(document.querySelectorAll(".circle"));
