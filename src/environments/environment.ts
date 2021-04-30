// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  balls: [
    {
      colorOriginal: "red",
      color: "red",
      value: 1
    },
    {
      colorOriginal: "#ffffe6",
      color: "#ffffe6",
      value: 2
    },
    {
      colorOriginal: "green",
      color: "green",
      value: 3
    },
    {
      colorOriginal: "#ffe6f2",
      color: "#ffe6f2",
      value: 4
    },
    {
      colorOriginal: "yellow",
      color: "yellow",
      value: 5
    },
    {
      colorOriginal: "#f2f2f2",
      color: "#f2f2f2",
      value: 6
    },
    {
      colorOriginal: "red",
      color: "red",
      value: 7
    },
    {
      colorOriginal: "#ffffe6",
      color: "#ffffe6",
      value: 8
    },
    {
      colorOriginal: "green",
      color: "green",
      value: 9
    },
    {
      colorOriginal: "#ffe6f2",
      color: "#ffe6f2",
      value: 10
    }
  ],

  lastBalls: [0,3,7,5,2, null, null, null, null, null]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
