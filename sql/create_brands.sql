CREATE TABLE public.Brands
(
    id uuid NOT NULL,
    name character varying(128),
    slug character varying(128),
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.Brands
    OWNER to doadmin;