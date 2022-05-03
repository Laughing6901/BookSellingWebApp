import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//for custom class local guard
@Injectable()
export class LocalGuard extends AuthGuard('local') {}
