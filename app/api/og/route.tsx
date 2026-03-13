import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get('title') || 'Kazuya Hibara';
  const subtitle = searchParams.get('subtitle') || 'AI Marketing Engineer';

  // Fetch Nunito Bold font
  const nunitoBold = await fetch(
    'https://fonts.gstatic.com/s/nunito/v26/XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgevT5.woff'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F3F1E9',
          padding: '60px',
          fontFamily: 'Nunito',
        }}
      >
        {/* Top: Site name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 24,
            color: '#595046',
            opacity: 0.7,
          }}
        >
          kazuyahibara.com
        </div>

        {/* Center: Title and subtitle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div
            style={{
              fontSize: title.length > 30 ? 48 : 64,
              fontWeight: 700,
              color: '#595046',
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#595046',
              opacity: 0.7,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom: Accent bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              width: 120,
              height: 6,
              backgroundColor: '#FFBFA8',
              borderRadius: 3,
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Nunito',
          data: nunitoBold,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );
}
