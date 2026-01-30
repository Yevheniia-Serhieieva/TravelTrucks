import { NextRequest, NextResponse } from "next/server";
import { api } from "../api";
import { AxiosError } from "axios";

export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get("categoryId");

  try {
    const { data } = await api("/catalog", {
      params: { categoryId },
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as AxiosError).message,
      },
      { status: (error as AxiosError).status },
    );
  }
}
