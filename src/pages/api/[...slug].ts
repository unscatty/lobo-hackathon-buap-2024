import { app } from '@server/app'

const handle = ({ request }: { request: Request }) => app.handle(request)

export const GET = handle
export const POST = handle
export const PUT = handle
export const DELETE = handle
export const PATCH = handle
export const OPTIONS = handle
export const HEAD = handle
