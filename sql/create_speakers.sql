CREATE TABLE public.speakers
(
    uuid uuid NOT NULL,
    brand_id uuid,
    name character varying(128),
    slug character varying(128),
    type character varying(32),
    sale_price money,
    price money,
    quantity smallint,
    enclosure character varying(32),
    finish character varying(32),
    color character varying(32),
    tweeter_type character varying(32),
    tweeter_size character varying(16),
    midrange_size character varying(16),
    woofer_size character varying(16),
    woofer_composition character varying(32),
    woofer_surround character varying(32),
    built_in_powered_sub smallint,
    dolby_atmos_drivers character varying(16),
    video_shielded character varying(16),
    connector_type character varying(32),
    bi_amp_inputs character varying(16),
    parts_warranty character varying(32),
    labor_warranty character varying(32),
    power_range smallint,
    frequency_response double precision,
    sensitivity double precision,
    impedance_ohms smallint,
    subwoofer_amp_power smallint,
    height_inches double precision,
    width_inches double precision,
    depth_inches double precision,
    weight_pounds double precision,
    recommended_stand_height_inches character varying(16),
    quantity_in_package character varying(16),
    aimable_tweeter smallint,
    moisture_resistant smallint,
    built_in_back_box smallint,
    cutout_size character varying(32),
    power_range_min smallint,
    power_range_max smallint,
    frequency_response_low_hz smallint,
    frequency_response_high_khz smallint,
    PRIMARY KEY (uuid)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.speakers
    OWNER to doadmin;