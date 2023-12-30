'use client';

import { InstagramEmbed } from 'react-social-media-embed';

type Props = {
    postId: string;
};

const InstagramPost = ({ postId }: Props) => {
    return (
        <div>
            <InstagramEmbed
                url={`https://www.instagram.com/p/${postId}/`}
                captioned
            />
        </div>
    );
};

export default InstagramPost;
