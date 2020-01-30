<div class="preload">
    <svg width={{ $width }} height={{ $height }}>
        <defs>
            <linearGradient id="g1" x1=0% y1=50% >
                <stop offset=0% stop-color=gray >
                    <animate id=a1 attributeName="stop-color" values="gray; #e5e5e5" begin="0; a2.end" dur="2s" />
                    <animate id=a2 attributeName="stop-color" values="#e5e5e5; gray" begin="a1.end" dur="2s" />
                </stop>
                <stop offset=100% stop-color=red >
                    <animate id=a3 attributeName="stop-color" values="#e5e5e5; silver" begin="0; a4.end" dur="2s" />
                    <animate id=a4 attributeName="stop-color" values="silver; #e5e5e5" begin="a3.end" dur="2s" />
                </stop>
            </linearGradient>
        </defs>
        <rect id=r x=0 y=0 width={{ $width }} height={{ $height }} fill=url(#g1) />
      </svg>
      <img data-src="{{ $src ?? '' }}" src="" alt="" style="width:{{ $width }}px;height:{{ $height }}px;opacity:0;">
</div>