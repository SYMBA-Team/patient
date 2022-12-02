import { createElement } from "react";

export function ConvertToJsx(ctx) {
    if (typeof ctx === "string") return ctx;
    return createElement(
        ctx.tag,
        ctx.props,
        ...(typeof ctx.children === "string"
            ? [ctx.children]
            : Array.isArray(ctx.children)
            ? ctx.children.map(ConvertToJsx)
            : ctx.children !== undefined
            ? [ConvertToJsx(ctx.children)]
            : [])
    );
}
export function ParseQuery(obj) {
    return obj
        ? Object.keys(obj)
              .map((key) => `${key}=${obj[key]}`)
              .join("&")
        : "";
}
