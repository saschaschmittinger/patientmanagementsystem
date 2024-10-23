import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex h-screen max-h-screen">
        {/* OTP Verification */}
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <div className="flex gap-2">
              <Image
                src="/assets/icons/logo.svg"
                height={800}
                width={800}
                alt="logo"
                className="mb-12 h-7 w-fit"
              />
              <h1>Sascha Schmittinger</h1>
            </div>

            <PatientForm />

            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                copyright 2024 Sascha Schmittinger
              </p>
              <Link href="/?admini=true" className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </section>

        <Image
          src="/assets/images/onboarding-img.png"
          alt="onboarding"
          height={1000}
          width={1000}
          className="side-img max-w-[50%]"
        />
      </div>
    </>
  );
}
