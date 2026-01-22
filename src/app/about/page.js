import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col items-center gap-10 py-6">
      <div className="flex justify-center py-8">
        <Image
          src="/logo.svg"
          alt="NHC Innovation logo"
          width={260}
          height={160}
        />
      </div>

      <div className="w-full max-w-[900px] space-y-6 text-[13px] text-[var(--text-primary)]">
        <div className="space-y-3">
          <h2 className="text-[14px] font-semibold text-[var(--brand)]">
            About NHC National Housing Company
          </h2>
          <p className="leading-6 text-[var(--text-primary)]">
            NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437
            AH to be the investment arm of the initiatives and programs of the
            Ministry of Municipal and Rural Affairs and Housing in the real
            estate, residential and commercial sectors. Then the Company came
            under state ownership in May of the year 2020, after which it
            entered a new stage in its journey and became an effective enabler
            of solutions for the Saudi real estate market. To become a leader in
            the real estate development sector and enable the public and private
            sectors to develop strategic partnerships with them. NHC is also
            keen to provide quality projects across urban communities with
            modern designs and various housing solutions at reasonable prices
            that keep pace with the aspirations of the future generation and
            achieve quality of life, in partnership with experienced and
            efficient real estate developers.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-[14px] font-semibold text-[var(--brand)]">
            National Housing Strategy
          </h2>
          <p className="leading-6 text-[var(--text-primary)]">
            The NHC Strategy aims for the Company to be an enabler of the real
            estate supply system by empowering the private sector to develop the
            real estate market and improve the professionalism of the services
            provided in it, thus offering broader horizons for the Company in
            enhancing the sustainability of its business and the work of the
            real estate supply system.
          </p>
        </div>
      </div>
    </div>
  );
}
