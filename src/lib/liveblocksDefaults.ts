import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import type { Layer } from "@/components/Whiteboard/types";

export const initialPresence = {
  selection: [],
  cursor: null,
  pencilDraft: null,
  penColor: null,
};

export const initialStorage = {
  layers: new LiveMap<string, LiveObject<Layer>>(),
  layerIds: new LiveList<string>([]),
};
