import { Request, Response } from 'express'
import { User } from '../entity/User'
import { AppDataSource } from '../app'

const homeDetail = async (req: Request, res: Response) => {

    // const manager = AppDataSource.manager
    const userRepository = AppDataSource.getRepository(User)

    //---------insert------------------------------------------------------------------

    // let data = await AppDataSource.manager.insert(User, {
    //     name: 'demo',
    //     email: 'demo@gmail.com',
    //     phone: '8908976574'
    // })

    // let data = await userRepository.insert({
    //     name: 'demo',
    //     email: 'demo.gmail.com',
    //     phone: '1234'
    // })

    //------save--------------------------------------------------------------------------

    // let user = new User()
    // user.name = 'dummy'
    // user.email = 'dummy@gmail.com'
    // user.phone = '12345678'
    // let data = await AppDataSource.manager.save(user)

    // let user = new User();
    // user.name = 'dummy'
    // user.email = 'dummy@gmail.com'
    // user.phone = '23455'
    // let data = await userRepository.save(user)


    //-------Update---------------------------------------------------------------------------

    // let data = await AppDataSource.manager.update(User, 2, {email: 'mytest@gmail.com'})

    // let data = await userRepository.update(2, {email: 'mytest@gmail.com'})

    //--------Delete--------
    // let data = await AppDataSource.manager.delete(User, 2)

    // let data = await userRepository.delete(1)

    //-------allFind------------------------------------------------------------------------
    // let data = await AppDataSource.manager.find(User)

    // let data = await userRepository.find()

    //--------find by id----------------------------------------------------------------------
    // let data = await manager.findOne(User, {
    //     where: {
    //         id: 1
    //     }
    // })

    // let data = await userRepository.findOne({
    //         where: {
    //             id: 2
    //         }
    //     })

    //----truncate------------------------------------------------------------------------------
    // let data = await manager.clear(User)

    let data = await userRepository.clear()



    res.json({
        test: 'ok',
        data: data
    })
}

export {
    homeDetail
}
