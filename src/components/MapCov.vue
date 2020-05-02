<template lang="pug">
    .map-cov      
        #map
</template>
<script>
import axios from "axios";
import _ from "lodash";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { TimelineMax, Linear } from "gsap";
import { mapGetters } from "vuex";
import CountryCodes from "@/assets/country_codes.json";

export default {
  props: {
    activeCaseText: {
      type: String,
      required: true
    },
    recoveredCaseText: {
      type: String,
      required: true
    },
    deadlyCaseText: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getCurve"])
  },
  data() {
    return {
      newCurve: null,
      cornerCurve: null,
      langNode: null,
      reports: [],
      worldReport: null,
      GlobalUsers: [],
      CovTracaUsers: [],
      map: null
    };
  },
  methods: {
    getReports() {
      let vm = this;
      axios.get("https://api.covtraca.org/v1/reports").then(res => {
        vm.reports = res.data.data;
        _.forEach(vm.reports, r => {
          if (r.lat != null && r.long != null) {
            vm.CovTracaUsers.push({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [r.long, r.lat]
              }
            });
          }
        });
      });
    },
    getCountryReports() {
      let vm = this;
      axios.get("https://api.covid19api.com/summary").then(res => {
        vm.worldReport = res.data;
        _.forEach(vm.worldReport.Countries, r => {
          let search_country = _.find(CountryCodes, s => {
            return s.country_code == r.CountryCode;
          });

          if (search_country && r.TotalConfirmed > 0) {
            vm.GlobalUsers.push({
              type: "Feature",
              properties: {
                description: `
                  <div class="report-country">
                    <h1>${r.Country}</h1>
                    <div class="progress-report">
                      <div class="progess-slice red" style="width:${100 *
                        (r.TotalConfirmed /
                          (r.TotalConfirmed +
                            r.TotalRecovered +
                            r.TotalDeaths / 100))}%"></div>
                      <div class="progess-slice green" style="width:${100 *
                        (r.TotalRecovered /
                          (r.TotalConfirmed +
                            r.TotalRecovered +
                            r.TotalDeaths / 100))}%"></div>
                      <div class="progess-slice black not-margin" style="width:${100 *
                        (r.TotalDeaths /
                          (r.TotalConfirmed +
                            r.TotalRecovered +
                            r.TotalDeaths / 100))}%"></div>
                    </div>
                    <div class="content-info-country">
                      <div class="content-title-country red">
                        <span class="circle-status"></span>
                        <div class="title-report">${
                          vm.activeCaseText
                        } </div class="title-report">
                        <div class="count-covid">                          
                          <span class="total-report">${r.TotalConfirmed}</span>
                          <span class="new-report">+${r.NewConfirmed}</span>
                        </div>
                      </div>
                      <div class="content-title-country green">
                        <span class="circle-status"></span>
                        <div class="title-report">${
                          vm.recoveredCaseText
                        } </div class="title-report">
                        <div class="count-covid">
                          <span class="total-report">${r.TotalRecovered}</span>
                          <span class="new-report">+${r.NewRecovered}</span>
                        </div>
                      </div>
                      <div class="content-title-country black">
                        <span class="circle-status"></span>
                        <div class="title-report">${
                          vm.deadlyCaseText
                        } </div class="title-report">
                        <div class="count-covid">
                          <span class="total-report">${r.TotalDeaths}</span>
                          <span class="new-report">+${r.NewDeaths}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  `
              },
              geometry: {
                type: "Point",
                coordinates: [
                  search_country.latlng[1],
                  search_country.latlng[0]
                ]
              }
            });
          }
        });
        vm.renderMap();
      });
    },
    renderMap() {
      let vm = this;
      mapboxgl.accessToken =
        "pk.eyJ1IjoiY292dHJhY2EiLCJhIjoiY2s5Y3liNXVmMDkyODNocDVzdGxvaXZqeCJ9.I-oXd16J5u_HVtr3gL8QPA";
      vm.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v10",
        zoom: 1.5
      });

      var size = 200;

      var pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function() {
          var canvas = document.createElement("canvas");
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext("2d");
        },

        // called once before every frame where the icon will be used
        render: function() {
          var radius = (size / 2) * 0.3;
          var context = this.context;

          // draw inner circle
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          //context.fillStyle = 'rgba(255, 100, 100, 1)';
          context.fillStyle = "rgba(0, 156, 222, 1)";
          context.strokeStyle = "white";
          context.fill();
          context.stroke();

          // update this image's data with data from the canvas
          this.data = context.getImageData(0, 0, this.width, this.height).data;
          return true;
        }
      };

      var infectedDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function() {
          var canvas = document.createElement("canvas");
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext("2d");
        },

        // called once before every frame where the icon will be used
        render: function() {
          var radius = (size / 2) * 0.3;
          var context = this.context;

          // draw inner circle
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          context.fillStyle = "rgba(255, 100, 100, 1)";
          context.strokeStyle = "rgba(255, 100, 100, 1)";
          context.fill();
          context.stroke();

          // update this image's data with data from the canvas
          this.data = context.getImageData(0, 0, this.width, this.height).data;
          return true;
        }
      };

      vm.map.on("load", function() {
        vm.map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 8 });
        vm.map.addImage("infected-dot", infectedDot, { pixelRatio: 8 });

        vm.map.addSource("infecteds", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: vm.GlobalUsers
          }
        });

        vm.map.addLayer({
          id: "infecteds",
          type: "symbol",
          source: "infecteds",
          layout: {
            "icon-image": "infected-dot"
          }
        });
        vm.map.on("click", "infecteds", function(e) {
          var coordinates = e.features[0].geometry.coordinates.slice();
          var description = e.features[0].properties.description;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(vm.map);
        });
        vm.map.on("mouseenter", "infecteds", function() {
          vm.map.getCanvas().style.cursor = "pointer";
        });

        // Change it back to a pointer when it leaves.
        vm.map.on("mouseleave", "infecteds", function() {
          vm.map.getCanvas().style.cursor = "";
        });

        vm.map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: vm.CovTracaUsers
          }
        });

        vm.map.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "pulsing-dot"
          }
        });
      });
    }
  },
  mounted() {
    if (window.innerWidth > 1023) {
      this.getCurve.pause();
      this.newCurve = new TimelineMax();
      this.cornerCurve = new TimelineMax();
      this.langNode = new TimelineMax();
      this.newCurve.to(".curve", 1, {
        left: "-70%",
        top: "-50%",
        scale: 3,
        ease: Linear.ease
      });
      this.cornerCurve.to(".corner-right", 1, {
        right: "-330px",
        top: "-309px",
        ease: Linear.ease
      });
      this.langNode.to(".navbar-nav", 1, {
        opacity: 0,
        display: "none",
        ease: Linear.ease
      });
    }
    this.getCountryReports();
    this.getReports();
  },
  destroyed() {
    let vm = this;
    let left = "-7%";
    let top = "-40%";
    if (window.innerWidth > 1023) {
      setTimeout(() => {
        vm.getCurve.resume();
      }, 1100);
      if (window.innerWidth >= 1408) {
        top = "-42%";
      }
      vm.newCurve.to(".curve", 1, {
        left,
        top,
        scale: 1,
        ease: Linear.ease
      });
    }
    this.cornerCurve.to(".corner-right", 1, {
      right: "-210px",
      top: "-170px",
      ease: Linear.ease
    });
    this.langNode.to(".navbar-nav", 1, {
      opacity: 1,
      display: "",
      ease: Linear.ease
    });
  }
};
</script>
<style lang="sass">
.progress-report
  display: flex
  margin-bottom: 10px
  .progess-slice
    height: 6px
    border-radius: 6px
    margin-right: 5px
    &.not-margin
      margin-right: 0px
    &.red
      background-color: #f46363
    &.green
      background-color: rgb(96, 187, 105)
    &.black
      background-color: rgb(118, 118, 118)
.mapboxgl-map
  font-family: 'Phantom Sans' !important
.mapboxgl-popup-content
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15) !important
  border-radius: 6px !important
.title-report
  font-weight: bold
  display: flex
.content-title-country
  display: grid
  grid-template-columns: 8px auto min-content
  align-items: center
  grid-gap: 16px 8px
  margin-bottom: 5px
  .circle-status
    width: 8px
    height: 8px
    border-radius: 8px
  &.red
    .circle-status
      background-color: #f46363
    .title-report
      color: #f46363
  &.green
    .circle-status
      background-color: rgb(96, 187, 105)
    .title-report
      color: rgb(96, 187, 105)
  &.black
    .circle-status
      background-color: rgb(118, 118, 118)
    .title-report
      color: rgb(118, 118, 118)
  .count-covid
    display: flex
    align-items: center
    color: #4f4f4f
    .new-report
      background-color: #F5F5F5
      padding: 2px 6px
      border-radius: 3px
.total-report
  margin: 0 10px
.report-country
  display: flex
  flex-direction: column
  padding: 5px
  h1
    text-align: center
    font-size: 2em
    margin-bottom: 10px
    font-weight: bold
.map-cov
    height: 100vh
    width: 100vw
    position: fixed
    top: 0
    left: 0
#map
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
</style>
