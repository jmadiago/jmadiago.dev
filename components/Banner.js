import Image from 'next/image';

export default function Banner() {
    return (
        <div className="flex justify-between items-center mt-5">
            <div className="basis-3/4">
                <h1 className="text-3xl font-semibold">Jose Diago</h1>
                <p className="mt-1">
                    Senior Software Developer at{' '}
                    <span className="font-semibold">CPI</span>
                </p>
                <p className="mt-3">
                    Passionate about Web Development using JavaScript / React
                    and its rich ecosystem.
                </p>
            </div>
            <div className="">
                <Image
                    height="96px"
                    width="96px"
                    className="rounded-full object-cover"
                    src="/images/profile-image.jpg"
                    alt="Jose Diago Profile Photo"
                />
            </div>
        </div>
    );
}
