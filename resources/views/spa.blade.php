@extends('layouts.main')
@section('head')

<meta property="sniddl:page" name="index" content="/page/landing">
<meta property="sniddl:page" name="photos" content="/page/photos">
<meta property="sniddl:page" name="contact" content="/page/contact">

@endsection

@section('page')

<div class="fixed top-0 right-0 z-10 m-8 text-white">
    <div class="flex items-center justify-end" @click="navVisible = !navVisible">
        <i class="far fa-bars fa-3x ml-3"></i>
    </div>
    <transition name="el-fade-in">
    <div class="carousel-overlay" v-show="navVisible" style="position: fixed; z-index: -1; opacity:1"></div>
    </transition>
    <transition name="el-zoom-in-top">
        <div v-show="navVisible" class="text-right text-4xl text-fancy hover:text-green-400">
            
            <a href="#/" class="my-8 block">HOME</a>
            <a href="#/contact" class="my-8 block">CONTACT</a>
            <a href="#/photos" class="my-8 block">PHOTOS</a>

        </div>
    </transition>
    
</div>




@endsection