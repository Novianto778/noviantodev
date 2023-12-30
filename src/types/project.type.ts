export type ProjectType =
    | 'Freelance'
    | 'Internship'
    | 'Personal Project'
    | 'Competition'
    | 'College Project'
    | 'Other';

export type Project = {
    id: number;
    name: string;
    subtitle: string;
    projectType: ProjectType;
    icon: string;
    description: string;
    images: string[];
    github: string;
    website: string;
    documentation: string;
    tech: (
        | {
              name: string;
              src: string;
          }
        | undefined
    )[];
};

// instagram scraper type
export type InstagramEmbed = {
    status: string;
    data: Data;
};

export type Data = {
    next_page: boolean;
    end_cursor: string;
    edges: DataEdge[];
};

export type DataEdge = {
    node: PurpleNode;
};

export type PurpleNode = {
    __typename: PurpleTypename;
    id: string;
    gating_info: null;
    fact_check_overall_rating: null;
    fact_check_information: null;
    media_overlay_info: null;
    sensitivity_friction_info: null;
    sharing_friction_info: SharingFrictionInfo;
    dimensions: Dimensions;
    display_url: string;
    display_resources: Resource[];
    is_video: boolean;
    media_preview: null | string;
    tracking_token: string;
    has_upcoming_event: boolean;
    edge_media_to_tagged_user: EdgeMediaToTaggedUser;
    accessibility_caption?: null;
    edge_media_to_caption: EdgeMediaTo;
    shortcode: string;
    edge_media_to_comment: EdgeMediaToComment;
    edge_media_to_sponsor_user: EdgeMediaTo;
    is_affiliate: boolean;
    is_paid_partnership: boolean;
    comments_disabled: boolean;
    taken_at_timestamp: number;
    edge_media_preview_like: EdgeMediaPreviewLike;
    owner: Owner;
    location: null;
    nft_asset_info: null;
    viewer_has_liked: boolean;
    viewer_has_saved: boolean;
    viewer_has_saved_to_collection: boolean;
    viewer_in_photo_of_you: boolean;
    viewer_can_reshare: boolean;
    thumbnail_src: string;
    thumbnail_resources: Resource[];
    coauthor_producers: any[];
    pinned_for_users: any[];
    edge_sidecar_to_children?: EdgeSidecarToChildren;
    dash_info?: DashInfo;
    has_audio?: boolean;
    video_url?: string;
    video_view_count?: number;
    product_type?: string;
};

export enum PurpleTypename {
    GraphSidecar = 'GraphSidecar',
    GraphVideo = 'GraphVideo',
}

export type DashInfo = {
    is_dash_eligible: boolean;
    video_dash_manifest: string;
    number_of_qualities: number;
};

export type Dimensions = {
    height: number;
    width: number;
};

export type Resource = {
    src: string;
    config_width: number;
    config_height: number;
};

export type EdgeMediaPreviewLike = {
    count: number;
    edges: any[];
};

export type EdgeMediaTo = {
    edges: EdgeMediaToCaptionEdge[];
};

export type EdgeMediaToCaptionEdge = {
    node: FluffyNode;
};

export type FluffyNode = {
    text: string;
};

export type EdgeMediaToComment = {
    count: number;
    page_info: PageInfo;
};

export type PageInfo = {
    has_next_page: boolean;
    end_cursor: null | string;
};

export type EdgeMediaToTaggedUser = {
    edges: EdgeMediaToTaggedUserEdge[];
};

export type EdgeMediaToTaggedUserEdge = {
    node: TentacledNode;
};

export type TentacledNode = {
    user: User;
    x: number;
    y: number;
};

export type User = {
    full_name: string;
    followed_by_viewer: boolean;
    id: string;
    is_verified: boolean;
    profile_pic_url: string;
    username: string;
};

export type EdgeSidecarToChildren = {
    edges: EdgeSidecarToChildrenEdge[];
};

export type EdgeSidecarToChildrenEdge = {
    node: StickyNode;
};

export type StickyNode = {
    __typename: FluffyTypename;
    id: string;
    gating_info: null;
    fact_check_overall_rating: null;
    fact_check_information: null;
    media_overlay_info: null;
    sensitivity_friction_info: null;
    sharing_friction_info: SharingFrictionInfo;
    dimensions: Dimensions;
    display_url: string;
    display_resources: Resource[];
    is_video: boolean;
    media_preview: string;
    tracking_token: string;
    has_upcoming_event: boolean;
    edge_media_to_tagged_user: EdgeMediaToTaggedUser;
    accessibility_caption?: null;
    dash_info?: DashInfo;
    has_audio?: boolean;
    video_url?: string;
    video_view_count?: number;
};

export enum FluffyTypename {
    GraphImage = 'GraphImage',
    GraphVideo = 'GraphVideo',
}

export type SharingFrictionInfo = {
    should_have_sharing_friction: boolean;
    bloks_app_url: null;
};

export type Owner = {
    id: string;
    username: Username;
};

export enum Username {
    NoviantoDev = 'novianto.dev',
}
