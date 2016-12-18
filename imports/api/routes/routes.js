import { Routes, updateView } from "./config";

Routes.route('/', {
  name: "home",
  action( params, queryParams ){
    updateView( 'mainLayout', { main: "home" } );
  }
});