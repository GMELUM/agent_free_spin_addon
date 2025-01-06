import React, { useEffect, useRef } from "react";
import styles from "./CoinsBurstEffect.module.css";

interface CoinsBurstEffectProps {
    images: React.ReactElement<HTMLImageElement>[]; // Массив картинок монет
    particleCount?: number; // Количество монет
    initialSize?: number; // Начальный размер монет
    maxSize?: number; // Максимальный размер монет
    growthRate?: number; // Скорость увеличения размера
    gravity?: number; // Сила гравитации
    burstPower?: number; // Сила начального вылета монет
    canvasWidth?: number; // Ширина Canvas
    canvasHeight?: number; // Высота Canvas
}

interface Particle {
    x: number; // Положение X
    y: number; // Положение Y
    size: number; // Размер частицы
    velocityX: number; // Скорость по X
    velocityY: number; // Скорость по Y
    rotationZ: number; // Угол вращения по Z
    rotationSpeedZ: number; // Скорость вращения по Z
    image: HTMLImageElement; // Картинка монеты
}

const CoinsBurstEffect: React.FC<CoinsBurstEffectProps> = ({
    images,
    particleCount = 50,
    initialSize = 20,
    maxSize = 150,
    growthRate = 2,
    gravity = 0.5,
    burstPower = 15,
    canvasWidth = window.innerWidth,
    canvasHeight = window.innerHeight,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const particles: Particle[] = [];
        const imgElements: HTMLImageElement[] = images.map((img) => {
            const imgElement = new Image();
            imgElement.src = (img.props as any).src;
            return imgElement;
        });

        const createParticles = () => {
            for (let i = 0; i < particleCount; i++) {
                const angle = Math.random() * Math.PI * 2; // Угол в радианах
                const speed = burstPower * (0.5 + Math.random()); // Скорость частицы
                const image = imgElements[Math.floor(Math.random() * imgElements.length)];

                particles.push({
                    x: centerX,
                    y: centerY,
                    size: initialSize,
                    velocityX: Math.cos(angle) * speed,
                    velocityY: Math.sin(angle) * speed - burstPower / 2, // Немного вверх
                    rotationZ: Math.random() * Math.PI * 2,
                    rotationSpeedZ: (Math.random() - 0.5) * 0.1, // Случайная скорость вращения
                    image,
                });
            }
        };

        const updateParticles = () => {
            particles.forEach((particle) => {
                particle.x += particle.velocityX; // Горизонтальное движение
                particle.y += particle.velocityY; // Вертикальное движение
                particle.velocityY += gravity; // Гравитация
                particle.size += growthRate; // Увеличиваем размер
                particle.rotationZ += particle.rotationSpeedZ; // Вращение по Z
            });

            // Удаляем частицы, которые выходят за пределы Canvas
            for (let i = particles.length - 1; i >= 0; i--) {
                const particle = particles[i];
                if (
                    particle.x < -particle.size ||
                    particle.x > canvas.width + particle.size ||
                    particle.y > canvas.height + particle.size
                ) {
                    particles.splice(i, 1);
                }
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                const { x, y, size, image, rotationZ } = particle;

                ctx.save();
                ctx.translate(x, y); // Перемещаемся к центру частицы
                ctx.rotate(rotationZ); // Вращаем монету
                ctx.drawImage(image, -size / 2, -size / 2, size, size); // Рисуем с учетом размера
                ctx.restore();
            });
        };

        const animate = () => {
            if (particles.length === 0) return; // Прекращаем анимацию, когда все частицы исчезли

            updateParticles();
            drawParticles();

            requestAnimationFrame(animate);
        };

        createParticles();
        animate();

        return () => {
            particles.length = 0; // Очищаем массив частиц при размонтировании
        };
    }, [
        images,
        particleCount,
        initialSize,
        maxSize,
        growthRate,
        gravity,
        burstPower,
        canvasWidth,
        canvasHeight,
    ]);

    return <canvas ref={canvasRef} className={styles.CoinsBurstEffect} />;
};

export default CoinsBurstEffect;
