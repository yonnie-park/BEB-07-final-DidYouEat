import { Controller, Get, Patch, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';

@Controller('/api/collections')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}
  @Get()
  collectionMain(): string {
    return 'collection';
  }

  @Get(':collection_id')
  getCollection(): object {
    return {};
  }

  @Post('create')
  create(): object {
    return {};
  }

  @Patch('newevent')
  newEvent(): object {
    return {};
  }

  @Patch('delevent')
  delEvent(): object {
    return {};
  }
}
