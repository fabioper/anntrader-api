export default interface EntityRepository<T> {
  getAll(query?: string): Promise<T[]>
  create(entity: T): Promise<void>
  getById(entityId: string): Promise<T>
  update(entityId: string, entity: T): Promise<void>
  remove(entityId: string): Promise<void>
}
