import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm"
import { Client } from "./client.entitie"

@Entity('contact')
class Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 250 })
  name: string

  @Column({ type: 'varchar', length: 45, unique: true })
  email: string

  @Column({ type: 'varchar', nullable: true })
  number?: string | null | undefined

  @CreateDateColumn({ type: 'date' })
  createdAt: string

  @ManyToOne(() => Client, (client) => client.contact)
  client: Client
}

export { Contact }