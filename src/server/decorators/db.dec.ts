import { Elysia } from 'elysia'
import { db } from '../db'

const dbDecorator = new Elysia({ name: 'db' }).decorate('db', db)

export default dbDecorator
