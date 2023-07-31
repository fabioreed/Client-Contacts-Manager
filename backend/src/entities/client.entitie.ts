import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Contact } from "./contact.entitie"

@Entity('client')
class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 250 })
  name: string

  @Column({ type: 'varchar', length: 45, unique: true })
  email: string

  @Column({ type: 'varchar', nullable: true })
  number?: string | null | undefined

  @Column({ type: 'varchar', length: 120 })
  password: string

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @OneToMany(() => Contact, contact => contact.client, { onDelete: "CASCADE" })
  contact: Contact[]
}

export { Client }