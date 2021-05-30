import {useTrail} from 'react-spring'

function useStaggeredList(num) {
    const trailAnimes = useTrail(num, {
        transform: "translateX(0px)",
        from: { transform: "translateX(-50px)" },
        config: {
            mass: 0.8,
            tension: 280,
            friction: 20
        },
        delay: 200,
    });
    return trailAnimes
};

export default useStaggeredList