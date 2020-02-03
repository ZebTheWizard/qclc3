@extends('layouts.main')
@section('head')

<meta property="sniddl:page" name="index" content="/page/landing">
<meta property="sniddl:page" name="photos" content="/page/photos">
<meta property="sniddl:page" name="contact" content="/page/contact">

<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('css/app.css') }}">

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
        <div v-show="navVisible" class="text-right text-4xl text-fancy">
            
            <a href="#/" @click="navVisible=false" class="my-8 block hover:text-green-400">HOME</a>
            <a href="#/contact" @click="navVisible=false" class="my-8 block hover:text-green-400">CONTACT</a>
            <a href="#/photos" @click="navVisible=false" class="my-8 block hover:text-green-400">PHOTOS</a>

        </div>
    </transition>
    
</div>




@endsection

@section('foot')
<script src="http://hammerjs.github.io/dist/hammer.min.js"></script>
    <script src="{{ asset('js/app.js') }}"></script>
@endsection