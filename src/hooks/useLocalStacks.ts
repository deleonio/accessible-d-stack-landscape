import { useEffect, useMemo, useState } from 'preact/hooks';
import { Item, Stack, StackItem } from '../types';

const LOCAL_STACKS_STORAGE_KEY = 'local-stacks-v1';
const LOCAL_STACK_VERSION = 1;

const DEFAULT_STACK_ITEM: Pick<StackItem, 'role' | 'status'> = {
	role: 'consumer',
	status: 'approved',
};

type PersistedLocalStack = {
	id: string;
	itemIds: string[];
	name: string;
	createdAt: string;
	updatedAt: string;
};

type PersistedLocalStackStore = {
	stacks: PersistedLocalStack[];
	version: number;
};

function isPersistedLocalStack(value: unknown): value is PersistedLocalStack {
	if (!value || typeof value !== 'object') {
		return false;
	}

	const candidate = value as Partial<PersistedLocalStack>;
	return (
		typeof candidate.id === 'string' &&
		typeof candidate.name === 'string' &&
		typeof candidate.createdAt === 'string' &&
		typeof candidate.updatedAt === 'string' &&
		Array.isArray(candidate.itemIds) &&
		candidate.itemIds.every((itemId) => typeof itemId === 'string')
	);
}

function loadPersistedLocalStacks(allItems: Item[]): PersistedLocalStack[] {
	if (typeof window === 'undefined') {
		return [];
	}

	try {
		const raw = localStorage.getItem(LOCAL_STACKS_STORAGE_KEY);
		if (!raw) {
			return [];
		}

		const parsed = JSON.parse(raw) as Partial<PersistedLocalStackStore>;
		if (parsed.version !== LOCAL_STACK_VERSION || !Array.isArray(parsed.stacks)) {
			return [];
		}

		const validItemIds = new Set(allItems.map((item) => item.id));
		return parsed.stacks.filter(isPersistedLocalStack).map((stack) => ({
			...stack,
			itemIds: Array.from(new Set(stack.itemIds.filter((itemId) => validItemIds.has(itemId)))),
		}));
	} catch {
		return [];
	}
}

function savePersistedLocalStacks(stacks: PersistedLocalStack[]) {
	if (typeof window === 'undefined') {
		return;
	}

	const payload: PersistedLocalStackStore = {
		version: LOCAL_STACK_VERSION,
		stacks,
	};

	localStorage.setItem(LOCAL_STACKS_STORAGE_KEY, JSON.stringify(payload));
}

function toStack(localStack: PersistedLocalStack): Stack {
	return {
		id: `local-${localStack.id}`,
		name: {
			de: localStack.name,
			en: localStack.name,
		},
		description: {
			de: 'Lokaler, selbst konfigurierter Stack',
			en: 'Local user-defined stack',
		},
		issuer: 'Local',
		items: localStack.itemIds.map((itemId) => ({ itemId, ...DEFAULT_STACK_ITEM })),
		publishedAt: localStack.updatedAt,
		version: 'local',
	};
}

function uniqueItemIds(itemIds: string[]) {
	return Array.from(new Set(itemIds));
}

export function useLocalStacks(allItems: Item[]) {
	const [localStacks, setLocalStacks] = useState<PersistedLocalStack[]>([]);

	useEffect(() => {
		setLocalStacks(loadPersistedLocalStacks(allItems));
	}, [allItems]);

	const upsertLocalStack = (name: string, itemIds: string[]) => {
		const trimmedName = name.trim();
		if (!trimmedName) {
			return false;
		}

		const validItemIds = new Set(allItems.map((item) => item.id));
		const sanitizedItemIds = uniqueItemIds(itemIds.filter((itemId) => validItemIds.has(itemId)));
		if (sanitizedItemIds.length === 0) {
			return false;
		}

		setLocalStacks((previous) => {
			const now = new Date().toISOString();
			const nextEntry: PersistedLocalStack = {
				createdAt: now,
				id: globalThis.crypto.randomUUID(),
				itemIds: sanitizedItemIds,
				name: trimmedName,
				updatedAt: now,
			};
			const next = [...previous, nextEntry];
			savePersistedLocalStacks(next);
			return next;
		});

		return true;
	};

	const deleteLocalStack = (stackId: string) => {
		setLocalStacks((previous) => {
			const next = previous.filter((stack) => stack.id !== stackId.replace(/^local-/, ''));
			savePersistedLocalStacks(next);
			return next;
		});
	};

	const allStacks = useMemo(() => localStacks.map(toStack), [localStacks]);

	return {
		allStacks,
		createLocalStack: upsertLocalStack,
		deleteLocalStack,
	};
}
