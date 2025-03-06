import { NextRequest, NextResponse } from 'next/server';
import collectionLogFixture from '@/../mocks/fixtures/collection-log.json';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  console.log(await params);

  return NextResponse.json(collectionLogFixture);
}

export async function PUT() {}

export async function DELETE() {}
