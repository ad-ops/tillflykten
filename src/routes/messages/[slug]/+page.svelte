<script lang="ts">
    import { pb } from "$lib/pocketbase";
    import * as Tabs from "$lib/components/ui/tabs";
    import { Badge } from "$lib/components/ui/badge";
    import { type Sms } from "$lib/pocketbase";
    import type { RecordSubscription } from "pocketbase";

    export let data;
    let sms: Sms[] = data.sms || [];
    let counterparts: string[] = data.counterparts;
    const owner =
        sms.length != 0 ? sms[0].expand?.phone.expand?.owner.name : "Ingen";

    function addMessage(e: RecordSubscription<Sms>) {
        console.log("new message", e.action);
        if (e.action === "create") {
            if (!counterparts.includes(e.record.counterpart)) {
                counterparts.push(e.record.counterpart);
                counterparts = counterparts;
            }
            sms.push(e.record);
            sms = sms;
        }
    }

    pb.collection("sms").subscribe("*", addMessage, {
        filter: `phone.id = "${data.phoneId}" && published = true`,
        expand: "phone.owner",
        sort: "receivedTime",
    });
</script>

<h1>{owner}s SMS</h1>

<Tabs.Root class="">
    <Tabs.List>
        {#each counterparts as counterpart}
            <Tabs.Trigger value={counterpart}>{counterpart}</Tabs.Trigger>
        {/each}
    </Tabs.List>
    {#each counterparts as counterpart}
        <Tabs.Content value={counterpart}>
            <div class="grid grid-cols-4 gap-4">
                {#each sms.filter((m) => m.counterpart === counterpart) as message}
                    <Badge
                        class="col-start-1 col-end-1 text-sm"
                        variant="destructive"
                    >
                        {message.receivedTime.toString().slice(0, 19)}
                        {message.message}
                    </Badge>
                {/each}
            </div>
        </Tabs.Content>
    {/each}
</Tabs.Root>
