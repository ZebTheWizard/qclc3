@extends('layouts.main')
@section('head')
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ asset('vendor/file-manager/css/file-manager.css') }}">
    
    
@endsection

@section('page')
<div style="height: 600px;">
    <div id="fm"></div>
</div>
@endsection

@section('foot')
<script src="{{ asset('vendor/file-manager/js/file-manager.js') }}"></script>
@endsection