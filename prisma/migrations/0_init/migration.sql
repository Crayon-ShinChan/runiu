-- CreateTable
CREATE TABLE "ee_round" (
    "number" TEXT NOT NULL,
    "url" TEXT,
    "name" TEXT,
    "name_clean" TEXT,
    "issued" INTEGER,
    "lowest_crs" INTEGER,
    "date" DATE,
    "datetime" TIMESTAMP(6),
    "cut_off_datetime" TIMESTAMP(6),
    "distribution_as_on_date" DATE,
    "dd1" INTEGER,
    "dd2" INTEGER,
    "dd3" INTEGER,
    "dd4" INTEGER,
    "dd5" INTEGER,
    "dd6" INTEGER,
    "dd7" INTEGER,
    "dd8" INTEGER,
    "dd9" INTEGER,
    "dd10" INTEGER,
    "dd11" INTEGER,
    "dd12" INTEGER,
    "dd13" INTEGER,
    "dd14" INTEGER,
    "dd15" INTEGER,
    "dd16" INTEGER,
    "dd17" INTEGER,
    "dd18" INTEGER,

    CONSTRAINT "ee_round_pkey" PRIMARY KEY ("number")
);

