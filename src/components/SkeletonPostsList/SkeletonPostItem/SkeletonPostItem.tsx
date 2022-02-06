import React from 'react';
import Skeleton from '@mui/material/Skeleton';

import { VIDEO_HEIGHT } from '../../../constants';

type Props = {
  videoHeight: number;
};

const SkeletonPostItem = ({ videoHeight }: Props) => {
  return <Skeleton variant="rectangular" width={225} height={videoHeight} />;
};

export default SkeletonPostItem;
