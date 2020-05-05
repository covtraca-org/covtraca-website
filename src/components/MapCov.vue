<template lang="pug">
    .map-cov      
        gmap-map(:center="center", :zoom="5", :options="options")
          gmap-marker(:key="'cov-' + i",
            v-for="(m, i) in CovTracaUsers",
            :position="m.position",
            :icon="m.icon")
          gmap-marker(:key="'global-' + j",
            v-for="(m, j) in GlobalUsers",
            :position="m.position",
            :icon="m.icon",
            @click="toggleInfoWindow(m, j)")
          gmap-info-window(
            :options="infoOptions",
            :position="infoWindowPos",
            :opened="infoWinOpen",
            @closeclick="infoWinOpen=false")
            div(v-html="infoContent")
</template>
<script>
import Vue from "vue";
import axios from "axios";
import _ from "lodash";
import { TimelineMax, Linear } from "gsap";
import { mapGetters } from "vuex";
import CountryCodes from "@/assets/country_codes.json";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBnC1bxO8z4HmQy346IgeKfgweL2tIokFc"
    //libraries: "places" // necessary for places input
  }
});

const iconBase = "/images/";

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
      center: { lat: 45.508, lng: -73.587 },
      icons: {
        global: {
          icon: iconBase + "dot_red.svg"
        },
        covUser: {
          icon: iconBase + "dot_blue.svg"
        }
      },
      infoContent: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      options: {
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#212121"
              }
            ]
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575"
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#212121"
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                color: "#757575"
              }
            ]
          },
          {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#181818"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#1b1b1b"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#2c2c2c"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#8a8a8a"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#373737"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#3c3c3c"
              }
            ]
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
              {
                color: "#4e4e4e"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#3d3d3d"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.description;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getReports() {
      let vm = this;
      axios.get("https://api.covtraca.org/v1/reports").then(res => {
        vm.reports = res.data.data;
        _.forEach(vm.reports, r => {
          if (r.lat != null && r.long != null) {
            vm.CovTracaUsers.push({
              icon: vm.icons["covUser"].icon,
              position: { lat: r.lat, lng: r.long },
              title: "Hello World!"
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
              icon: vm.icons["global"].icon,
              position: {
                lat: search_country.latlng[0],
                lng: search_country.latlng[1]
              },
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
            });
          }
        });
      });
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    renderMap() {
      /*
      let vm = this;  
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
      */
    }
  },
  mounted() {
    this.geolocate();
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
.vue-map-container
  height: 100%
</style>
