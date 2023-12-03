export default interface EntityRepository<T> {
  getAll(): Promise<T[]>
  create(entity: T): Promise<void>
  getById(entityId: string): Promise<T>
  update(entity: T): Promise<void>
  remove(entityId: string): Promise<void>
}
