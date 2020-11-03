CREATE TABLE public.brands
(
    uuid uuid NOT NULL,
    name character varying(128),
    slug character varying(128),
    PRIMARY KEY (uuid)
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.brands
    OWNER to doadmin;