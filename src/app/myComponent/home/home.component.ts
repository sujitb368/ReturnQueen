import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import * as am5 from '@amcharts/amcharts5';
// import * as am5map from '@amcharts/amcharts5/map';
// import worldLow from '@amcharts/amcharts5/geodata/worldLow';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let map = am4core.create("map", am4maps.MapChart);
    map.geodata = am4geodata_usaLow;

    map.projection = new am4maps.projections.AlbersUsa();

    let polygonSeries = new am4maps.MapPolygonSeries();
    map.series.push(polygonSeries);
    polygonSeries.useGeodata = true;
    map.series.push(polygonSeries);
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    map.width = 800;
    map.height = 450;
    polygonTemplate.fill = am4core.color("#f3f3f3");
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#66469d");
    polygonSeries.exclude = ["AQ"];

    // let square = lineSeries.bullets.push(am4core.Rectangle);



    let imageSeries = map.series.push(new am4maps.MapImageSeries());

    let bullet = imageSeries.bullets.push(new am4charts.CircleBullet());
    let imageSeriesTemplate = imageSeries.mapImages.template;
    let circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#8755de");
    circle.stroke = am4core.color("#FFFFFF");
    circle.strokeWidth = 2;
    circle.nonScaling = true;
    circle.tooltipText = "{title}";

    imageSeriesTemplate.propertyFields.latitude = "latitude";
    imageSeriesTemplate.propertyFields.longitude = "longitude";
    map.panBehavior = "none";
    map.maxZoomLevel = 1;

    imageSeries.data = [
      {
      "latitude": 40.712775,
      "longitude": -74.005973,
      "title": "New York"
    },{
      "latitude": 49.282729,
      "longitude": -123.120738,
      "title": "Vancouver"
    }];

    polygonSeries.data = [

      { id: "CI", value: 50.367 },
      { id: "HR", value: 76.881 },
    ]
    // const mapInp = document.getElementById("mapInp").value;
    const mapInpBtn = document.getElementById("mapInpBtn");
    mapInpBtn?.addEventListener("click", ()=>{
      var inputValue = (<HTMLInputElement>document.getElementById("mapInp")).value;
      console.log(inputValue);

    })

  }

  zip = new FormControl('');
  searchForm = new FormGroup({});
  // favoriteColorControl = new FormControl('');
  loginUser() {
    console.log('submited');
  }
}
