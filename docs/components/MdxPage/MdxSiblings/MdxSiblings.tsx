import React from 'react';
import { SimpleGrid } from '@mantine/core';
import { MdxSibling } from './MdxSibling/MdxSibling';
import { DocumentTypeMap } from '.contentlayer/generated';
import { getPageSiblings } from '@/utils/get-page-siblings';
import { useRouter } from 'next/router';
import useRawPath from '@/hooks/use-raw-path';

export function MdxSiblings({ type }: { type: keyof DocumentTypeMap }) {
    const { rawPath } = useRawPath();
    const routePath = rawPath.slice(0, -1);
    const siblings = getPageSiblings(type, routePath);

    return (
        <SimpleGrid
            mt={40}
            cols={2}
            breakpoints={[{ maxWidth: 1000, cols: 1 }]}
        >
            {siblings.prev && <MdxSibling type="prev" data={siblings.prev} />}
            {siblings.next && <MdxSibling type="next" data={siblings.next} />}
        </SimpleGrid>
    );
}
