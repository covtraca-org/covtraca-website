<template lang="pug">
    .map-cov
        #map
</template>
<script>
import axios from "axios";
import _ from "lodash";
import mapboxgl from "mapbox-gl";
import { TimelineMax, Linear } from "gsap";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCurve"])
  },
  data() {
    return {
      newCurve: null,
      reports: [],
      coordinates: []
    };
  },
  methods: {
    getReports() {
      let vm = this;
      axios.get("https://api.covtraca.org/v1/reports").then(res => {
        vm.reports = res.data.data;
        _.forEach(vm.reports, r => {
          if (r.lat != null && r.long != null) {
            vm.coordinates.push({
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
    renderMap() {
      let vm = this;
      mapboxgl.accessToken =
        "pk.eyJ1IjoiY292dHJhY2EiLCJhIjoiY2s5Y3liNXVmMDkyODNocDVzdGxvaXZqeCJ9.I-oXd16J5u_HVtr3gL8QPA";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
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
          var duration = 1000;
          var t = (performance.now() % duration) / duration;

          var radius = (size / 2) * 0.3;
          var outerRadius = (size / 2) * 0.7 * t + radius;
          var context = this.context;

          // draw outer circle
          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
          );
          //context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
          context.fillStyle = "rgba(0, 156, 222," + (1 - t) + ")";
          context.fill();

          // draw inner circle
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
          //context.fillStyle = 'rgba(255, 100, 100, 1)';
          context.fillStyle = "rgba(0, 156, 222, 1)";
          context.strokeStyle = "white";
          context.lineWidth = 2 + 4 * (1 - t);
          context.fill();
          context.stroke();

          // update this image's data with data from the canvas
          this.data = context.getImageData(0, 0, this.width, this.height).data;

          // continuously repaint the map, resulting in the smooth animation of the dot
          map.triggerRepaint();

          // return `true` to let the map know that the image was updated
          return true;
        }
      };
      map.on("load", function() {
        map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: vm.coordinates
          }
        });
        map.addLayer({
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
      this.newCurve.to(".curve", 1, {
        left: "-70%",
        top: "-50%",
        scale: 3,
        ease: Linear.ease
      });
    }
    this.getReports();
    this.renderMap();
  },
  destroyed() {
    let vm = this;
    if (window.innerWidth > 1023) {
      setTimeout(() => {
        vm.getCurve.resume();
      }, 1100);
      vm.newCurve.to(".curve", 1, {
        left: "0%",
        top: "-5%",
        scale: 1,
        ease: Linear.ease
      });
    }
  }
};
</script>
<style lang="sass">
.map-cov
    height: 100vh
    width: 100vw
    position: fixed
    top: 0
    left: 0
#map
    width: 100%
    height: 100%
</style>
