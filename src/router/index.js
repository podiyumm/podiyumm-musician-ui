import Vue from "vue";
import VueRouter from "vue-router";
import Song from "@/components/Song";
import SongList from "@/components/SongList";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/song/:id",
      name: "song",
      component: Song,
    },
    {
      path: "/",
      name: "songList",
      component: SongList,
    },
    // {
    //   path: '/:catchAll(.*)',
    //   component: NotFoundComponent,
    //   name: 'NotFound'
    // }
  ],
  base: process.env.NODE_ENV === 'production'
      ? '/musician-ui/' // prod
      : '/', // dev
  mode: "history",
});
