import { Module } from '@nestjs/common';
import GameController from './game.controller';
import PrismaModule from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GameController],
})
export default class GameModule {}
