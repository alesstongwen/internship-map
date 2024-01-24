import { Student } from "./student";
import { Internship } from "./internship";

export class CustomizedMap {
  private googleMap: google.maps.Map;

  constructor(mapDiv: HTMLElement) {
    this.googleMap = new google.maps.Map(mapDiv, {
      zoom: 4,
      center: { lat: 52, lng: -108 },
    });
  }

  addStudentMarker(student: Student): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: student.location.lat,
        lng: student.location.lon,
      },
      icon: "http://maps.google.com/mapfiles/kml/shapes/golf.png",
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `Student: ${student.fullName}`,
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  addInternshipMarker(internship: Internship): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: internship.location.lat,
        lng: internship.location.lon,
      },
      icon: "https://maps.google.com/mapfiles/kml/shapes/homegardenbusiness.png",
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `Welcome to ${internship.businessName}'s Internship!`,
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
