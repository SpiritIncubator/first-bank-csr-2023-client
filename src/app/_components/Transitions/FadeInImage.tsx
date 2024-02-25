import { useState } from 'react';
import { motion } from 'framer-motion';
import NextImage, { ImageProps } from 'next/image';

interface FadeInImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
	src: string;
	alt: string;
	priority?: boolean;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ src, alt, priority }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: isLoaded ? 1 : 0 }}
			transition={{ duration: 1 }}>
			<NextImage
				src={src}
				alt={alt}
				priority={priority}
				onLoadingComplete={() => setIsLoaded(true)}
				layout="fill"
			/>
		</motion.div>
	);
};

export default FadeInImage;
