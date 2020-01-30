<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Poppins:800i|Raleway|Roboto&display=swap" rel="stylesheet"> 

    {{-- Styles --}}
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <script src="https://kit.fontawesome.com/fe56942586.js" crossorigin="anonymous"></script>

    @yield('head')
</head>

<body>
    <main id="app">
        @yield('page')
    </main>
    <script src="http://hammerjs.github.io/dist/hammer.min.js"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
