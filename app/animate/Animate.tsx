"use client";
import { animate, createScope } from "animejs";
import type { Scope } from "animejs";
import { useEffect, useRef } from "react";

export default function Animate() {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);

    useEffect(() => {
        if (!root.current) return;

        scope.current = createScope({ root }).add(() => {
            // Container: use the ref directly — `.selector-demo` won't match
            // because the scope root itself is excluded from querySelectorAll.
            animate(root.current!, { scale: 0.75 });

            // Children: scoped selector works fine here.
            animate(".square", { x: "23rem" });
        });

        return () => scope.current?.revert();
    }, []);

    return (
        <div ref={root} id="selector-demo" className="selector-demo">
            <div className="square" />
            <div className="square" />
            <div className="square" />
        </div>
    );
}