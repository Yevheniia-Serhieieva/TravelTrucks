import { NextRequest, NextResponse } from "next/server";
import { api } from "../../api";
import { AxiosError } from "axios";

type Props = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  try {
    const { data } = await api(`/catalog/${id}`);
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
