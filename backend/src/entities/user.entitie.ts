import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 45 })
  name: string

  @Column({ type: 'varchar', length: 45, unique: true })
  email: string

  @Column({ type: 'varchar', length: 120 })
  password: string

  // @BeforeInsert()
  // @BeforeUpdate()
  // hashPassword(){
  //   const isEncrypted = getRounds(this.password)
  //   if(!isEncrypted) this.password = hashSync(this.password, 8)
  // }

  // @OneToMany(() => Clients, (clients) => clients.user)
  // clients: Clients[]
}

export { User }