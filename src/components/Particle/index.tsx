import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { ParticleConfiguration } from "./styles";

const Particle = () => {
  const options = useMemo(() => {
    return {
      interactivity: {
        background: {
          color: {
            value: "#000",
          },
        },
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "attract",
            move: {
              enable: true,
              speed: { min: 1, max: 3 },
            },
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          attract: {
            radius: 600,
          },
        },
      },
      IDimension: {
        height: 0,
      },
      particles: {
        links: {
          enable: true,
          distance: 250,
        },
        move: {
          enable: true,
          speed: { min: 3, max: 5 },
        },
        opacity: {
          value: { min: 1.74, max: 2 },
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine: Engine): Promise<void> => {
    return loadSlim(engine);
  }, []);

  return (
    <ParticleConfiguration>
      <Particles init={particlesInit} options={options} />
    </ParticleConfiguration>
  );
};

export default Particle;
