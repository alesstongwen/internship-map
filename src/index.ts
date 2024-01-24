import { CustomizedMap } from "./CustomizedMap";
import { Student } from "./student";
import { Internship } from "./internship";

function initMap(): void {
  const student = new Student();
  const internship = new Internship();
  const mapElement = document.getElementById("map")!;
  // const googleMap = new google.maps.Map(mapElement, {
  //   zoom: 12,
  //   center: { lat: 52, lng: -108 },
  // });
  const map = new CustomizedMap(mapElement);

  map.addStudentMarker(student);
  map.addInternshipMarker(internship);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
initMap();
export {};
